import { useSignInMutation } from "../../../graphql/mutations/user/signIn.enhanced";
import { getErrorMessage } from "../../../helpers";

export const useSignIn = () => {
  const [signInTrigger, { data, isLoading, isError, error }] =
    useSignInMutation();

  return {
    signInTrigger,
    token: data?.signIn?.token,
    signInLoading: isLoading,
    signInHasError: isError,
    signInError: getErrorMessage(error),
  };
};
