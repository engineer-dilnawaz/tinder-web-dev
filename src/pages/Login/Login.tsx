import { Controller } from "react-hook-form";
import { Envelope, Key } from "../../assets/svgs";
import { Alert, Input, Loading } from "../../components";
import { useLoginLogic } from "./useLoginLogic";

export const Login = () => {
  const { loginError, isLoginPending, handleLogin, handleSubmit, control } =
    useLoginLogic();

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Welcome back! Please enter your details. We've missed you!
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            {loginError && <Alert message={loginError.message} type="error" />}
            <fieldset className="fieldset space-y-2">
              <Controller
                control={control}
                name="email"
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    type="email"
                    placeholder="Email"
                    icon={<Envelope />}
                    errorMessage={fieldState.error?.message ?? ""}
                    isValid={!fieldState.invalid}
                    isTouched={fieldState.isTouched}
                  />
                )}
              />
              <Controller
                control={control}
                name="password"
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    type="password"
                    placeholder="Password"
                    icon={<Key />}
                    errorMessage={fieldState.error?.message ?? ""}
                    isValid={!fieldState.invalid}
                    isTouched={fieldState.isTouched}
                  />
                )}
              />

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button
                className="btn btn-neutral"
                disabled={isLoginPending}
                onClick={handleSubmit(handleLogin)}
              >
                {isLoginPending ? (
                  <Loading color="text-primary" size="lg" />
                ) : (
                  "Login"
                )}
              </button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};
