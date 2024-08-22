import { LuLoader2 } from "react-icons/lu";
import { useNavigation } from "react-router-dom";
import { Button } from "./ui/button";

const SubmitBtn = ({
  text,
  className,
}: {
  text?: string;
  className?: string;
}) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <>
      <Button
        type="submit"
        className={className || "w-full mt-4"}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex">
            <LuLoader2 className="h-4 w-4 mr-2 animate-spin" />
            Submitting ...
          </span>
        ) : (
          text
        )}
      </Button>
    </>
  );
};
export default SubmitBtn;
