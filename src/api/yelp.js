import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 5BAy7kiq5j1F7kyBuIRH3DBpiDEvMKPU0G5w1SxFbb6vVxfAhqiL1vn5xQaDA3u8TarbdoaDo8835xAwA8XW5TsVurCciQfFsm-5EfjvlhHT_qMmbASAkDKOQGiyY3Yx",
  },
});
