function Profile(props) {
  const { user } = props;
  console.log("render profile");
  return (
    <div>
      <h4>Perfil</h4>
      {user}
    </div>
  );
}

export default Profile;
