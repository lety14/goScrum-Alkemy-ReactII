import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { cleanAllFilters } from "../../store/slices/tasksFilters.slice";
import {
  HeaderBox,
  HeaderContainer,
  TasksCounter,
  UserName,
} from "./Header.style";
import { useAppSelector } from "../../store/hooks";
import { getTasksState } from "../../store/slices/tasks.slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Donate from "../Donate";

export const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const logo = require("../../assets/goscrum.png");
  const { tasks } = useAppSelector(getTasksState);

  const handleLogout = () => {
    dispatch(cleanAllFilters());
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    navigate("/login", { replace: true });
  };

  return (
    <HeaderContainer>
      <img src={`${logo}`} alt="Logo" />
      <HeaderBox>
        <Donate />
        <TasksCounter>Tareas: {!tasks ? 0 : tasks.length}</TasksCounter>
        <div>
          <UserName>{localStorage.getItem("userName")}</UserName>
          <span onClick={handleLogout}>
            <FontAwesomeIcon className="closeIcon" icon={faXmark} />
          </span>
        </div>
      </HeaderBox>
    </HeaderContainer>
  );
};
