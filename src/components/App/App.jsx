import { WrapperFeedBack } from "./App.styled";
import { FeedBackButtons } from "components/FeedBackButtons/FeedBackButtons";

export const App = () => {
  return (
    <WrapperFeedBack>
      <FeedBackButtons
        title="Please leave feedback"
        titleStatistic="Statistics"
      />
    </WrapperFeedBack>
  );
};
