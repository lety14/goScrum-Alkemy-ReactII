import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { deleteTask, updateTask } from "../../store/slices/tasks.slice";
import { ITask } from "../../types/tasks.type";
import { limitTextLong } from "../../Utils/LimitTextLong";
import {
  CardContainer,
  Button,
  Close,
  DateTime,
  Title,
  ButtonContainer,
  ShowMore,
} from "./Card.style";

type CardProps = {
  data: ITask;
};

export const Card: FC<CardProps> = ({
  data: { title, createdAt, description, status, importance },
  data,
}) => {
  const [showMore, setShowMore] = useState(false);
  const dispatch = useAppDispatch();

  const datetime =
    (createdAt ? new Date(createdAt).toLocaleString() : 0) + " hs.";
  return (
    <CardContainer>
      <Close
        onClick={() => data._id !== undefined && dispatch(deleteTask(data._id))}
      >
        <FontAwesomeIcon className="closeIcon" icon={faXmark} />
      </Close>
      <Title>{title}</Title>
      <DateTime>{datetime}</DateTime>
      <ButtonContainer>
        <Button
          className={status.toLowerCase()}
          type="button"
          onClick={() => dispatch(updateTask(data))}
        >
          {status.toLowerCase()}
        </Button>
        <Button className={importance.toLowerCase()} type="button">
          {importance.toLowerCase()}
        </Button>
      </ButtonContainer>
      {!showMore && <p>{limitTextLong(description).text}</p>}
      {showMore ? (
        <>
          <p>{description}</p>
          <ShowMore type="button" onClick={() => setShowMore(false)}>
            Ver menos
          </ShowMore>
        </>
      ) : (
        limitTextLong(description).addSeeMoreButton && (
          <ShowMore type="button" onClick={() => setShowMore(true)}>
            Ver más
          </ShowMore>
        )
      )}
    </CardContainer>
  );
};
