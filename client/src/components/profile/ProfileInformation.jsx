import useAuthContext from "../../hooks/useAuthContext";

const ProfileInformation = () => {
  const { currentUser } = useAuthContext();
  return (
    <>
      <h2 className="h3 text-light py-3" id="my-profile">
        My profile
      </h2>
      <p className="text-light">
        Below you can find details about your account
      </p>

      <hr className="bg-light" />

      <p className="text-light">
        Name:{" "}
        <span>
          {currentUser?.first_name + " " + currentUser?.last_name}
        </span>
      </p>
      <p className="text-light">
        Email: <span>{currentUser?.email}</span>
      </p>
    </>
  );
};

export default ProfileInformation;
