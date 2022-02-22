import { useCollection } from "./firebaseHooks/useMakeupPosts";
import { useAuthContext } from "./firebaseHooks/useAuthContext";
import { setDoc, doc } from "firebase/firestore";
import { db } from "./config";
import ProfileSettingsFirebaseInput from "./ProfileSettingsFirebaseInput";
import { useState } from "react";
import "./ProfileSettingsFirebase.scss";

export default function ProfileSettingsFirebase() {
  const { user } = useAuthContext();
  const { posts } = useCollection("UserSettings", ["uid", "==", user.uid]);
  const [email, setEmail] = useState("Email");
  const [firstName, setFirstName] = useState("First Name");
  const [lastName, setLastName] = useState("Last Name");
  const [streetAddress, setStreetAddress] = useState("Street Address");
  const [city, setCity] = useState("City");
  const [postalcode, setPostalcode] = useState("Postal Code");
  const [phoneNumber, setPhoneNumber] = useState("Phone Number");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await setDoc(doc(db, `UserSettings`, `${user.uid}`), {
      Email: email,
      FirstName: firstName,
      LastName: lastName,
      StreetAddress: streetAddress,
      City: city,
      Postalcode: postalcode,
      PhoneNumber: phoneNumber,
      uid: user.uid,
    });
  };

  const renderUserSettings = () => {
    if (posts === undefined || posts === null || posts.length === 0);
   else {
      return (
        <>
          {posts.map((post) => (
            <div className="userInfomationFirebase" key={post.id}>
              <h3>Profile Infomation</h3>
              <div className="userInfomationData">
                <p>Email: {post.Email}</p>
                <div className="infomationFname&Last">
                  <p>First Name: {post.FirstName}</p>
                  <p>Last Name: {post.LastName}</p>
                </div>

                <p>Street Address: {post.StreetAddress}</p>
                <p>City: {post.City}</p>
                <p>Postal Code: {post.Postalcode}</p>
                <p>Phone Number: {post.PhoneNumber}</p>
              </div>
            </div>
          ))}
        </>
      );
    }
    };

  return (
      <section className="userSettings">
           <div className="h2titleContainer">
                  <h2>User Settings and Profile Infomation</h2>
              </div>
        <div className="userSettings-wrapper">     
        <form
          autocomplete="on"
          className="userSettingsFormChangeData"
          onSubmit={handleSubmit}
              >
            <h3>Update Profile Infomation</h3>
          <ProfileSettingsFirebaseInput
            valueInput={email}
            setValue={setEmail}
          />
          <ProfileSettingsFirebaseInput
            valueInput={firstName}
            setValue={setFirstName}
          />
          <ProfileSettingsFirebaseInput
            valueInput={lastName}
            setValue={setLastName}
          />
          <ProfileSettingsFirebaseInput
            valueInput={streetAddress}
            setValue={setStreetAddress}
          />
          <ProfileSettingsFirebaseInput valueInput={city} setValue={setCity} />
          <ProfileSettingsFirebaseInput
            valueInput={postalcode}
            setValue={setPostalcode}
          />
          <ProfileSettingsFirebaseInput
            valueInput={phoneNumber}
            setValue={setPhoneNumber}
          />
          <button type="submit" className="submit">Update Profile Infomation</button>
        </form>
        {renderUserSettings()}
      </div>
    </section>
  );
}
