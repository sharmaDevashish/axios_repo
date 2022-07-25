import axios from "axios";
import { useEffect, useState } from "react";

export default function LoginController() {
  const [welcomeData, setWelcomeData] = useState<string>("");

  useEffect(() => {
    const getData = () => {
      axios({
        method: "get",
        url: "https://mocki.io/v1/b69ae7f8-6529-415d-9bd1-efdebca1f4f6",
        responseType: "text"
      }).then(function (response) {
        console.log(response.data.data);
        setWelcomeData(response.data.data);
      });
    };
    getData();
  });

  return <div>{welcomeData}</div>;
}
