import { React, useReducer } from "react";
import styles from "./Chatmain.module.css";
import { AddCircleOutline, Send } from "@mui/icons-material";
import { INITIAL_STATE, chatReducer, ACTIONS } from "./reducers/Chatreducer";

export default function ChatMain() {
  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  const handleSendmsg = (e) => {
    dispatch({
      type: ACTIONS.INPUT_BOX_VALUE,
      payload: e.target.value,
    });
  };
  const handleSend = () => {
    const pay={
        question:state.input_box,
        answer:"12345"
    }
    dispatch({
      type: ACTIONS.SEND_MSG,
      payload: pay,
    });
    dispatch({
      type: ACTIONS.ANSWER,
      payload: "Answer",
    });
  };
  console.log("reducer state>>>", state);
  return (
    <div className={styles.main}>
      <div className={styles.ans_box}>
        <>
          {state.msg.length > 0 &&
            state.msg.map((val, index) => (
              <div
                style={{ display: "flex", flexDirection: "column" }}
                key={`msg_${index}`}
              >
                <span className={styles.msg_bubble}>{val.question}</span>
                <span className={styles.answer_bubble}>{val.answer}</span>
              </div>
            ))}
        </>
      </div>
      <div className={styles.msg_main_div}>
        <input
          onChange={handleSendmsg}
          value={state.input_box}
          type="text"
          placeholder="Type your questions here"
        />
        <div
          className={
            state.input_box.length > 0
              ? styles.div_send_btn_container_2
              : styles.div_send_btn_container
          }
        >
          <Send onClick={state.input_box.length > 0 ? handleSend : null} />
        </div>
      </div>
    </div>
  );
}