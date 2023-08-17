import {
  Fail,
  Success,
  Pending,
  PopoverAsyncState,
} from "/src/components/async/index.js";
import { sftest, evlogin } from "/src/services/afmachine/statefulActions.js";

export default function () {
  return (
    <div>
      <PopoverAsyncState
        action={evlogin}
        timePending={2000}
        timeResolving={2000}
        timeRejecting={2000}
      />
      <div>
        <Fail size="50" />
      </div>
      <div>
        <Success />
      </div>

      <div>
        <Pending />
      </div>
      <button
        onClick={() =>
          evlogin()
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        }
      >
        run sftest
      </button>
    </div>
  );
}
