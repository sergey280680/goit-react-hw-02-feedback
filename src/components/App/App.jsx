import { WrapperFeedBack } from "./App.styled";
import { FeedBack } from "components/FeedBack/FeedBack";

export const App = () => {
  return (
    <WrapperFeedBack>
      <FeedBack
        title="Please leave feedback"
        titleStatistic="Statistics"
        titleNoStatistic="No feedback given"
      />
    </WrapperFeedBack>
  );
};
