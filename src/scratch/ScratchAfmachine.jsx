import { useApp } from "/src/app/useApp.jsx";

export default function () {
  const app = useApp();
  return (
    <div>
      {" "}
      <button
        onClick={() => {
          app.afmachine.services.storage
            .login()
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        }}
      >
        test afmachine route
      </button>
    </div>
  );
}
