import {
  StoreProvideApp,
  StoreProvideRegistration,
  useContextApp,
  useContextRegistration,
} from "/src/stores/index.js";

function App({ children }) {
  return <StoreProvideApp>{children}</StoreProvideApp>;
}

function Applevel({ children }) {
  const app = useContextApp();
  console.log(app);
  return (
    <div>
      <h1>app level</h1>
      <button
        onClick={() => {
          app.persistClient("yolo", "brigadier");
        }}
      >
        set client
      </button>
      <button onClick={() => console.log(app.getClient())}>get client</button>
      {children}
    </div>
  );
}

function Registration({ children }) {
  return <StoreProvideRegistration>{children}</StoreProvideRegistration>;
}

function RegistrationLevel() {
  const registration = useContextRegistration();
  return (
    <div>
      <h1>registration level</h1>
      <button
        onClick={() => {
          registration.persistPage("what", "toheunoehtunoeuth");
        }}
      >
        set registration page
      </button>
      <button
        onClick={() => {
          console.log(registration.getPage());
        }}
      >
        check persistant page
      </button>
    </div>
  );
}

export default function scratchStorage() {
  return (
    <div>
      <h1>scratch storage</h1>
      <div>
        <div>
          <App>
            <Applevel>
              <Registration>
                <RegistrationLevel />
              </Registration>
            </Applevel>
          </App>
        </div>
      </div>
    </div>
  );
}
