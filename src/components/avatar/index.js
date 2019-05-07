import React, { Component } from "react";
import { Grid } from "antd-mobile";

const Tip = function(props) {
  if (!props.avatar) {
    return <div style={{ lineHeight: "30px" }}>请选择头像</div>;
  }
  return (
    <div style={{ lineHeight: "30px" }}>
      选择的头像为：
      <img src={props.avatar} style={{ width: "30px" ,height:"30px"}} />
    </div>
  );
};

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarIcon: ""
    };
  }
  render() {
    const avatarArray = [
      "头像1",
      "头像2",
      "头像3",
      "头像4",
      "头像5",
      "头像6",
      "头像7",
      "头像8",
      "头像9",
      "头像10",
      "头像11",
      "头像12",
      "头像13",
      "头像14",
      "头像15",
      "头像16",
      "头像17",
      "头像18",
      "头像19",
      "头像20"
    ];
    const data = avatarArray.map((item, i) => ({
      icon: require(`./images/${item}.png`),
      text: item
    }));
    let { selectAvatar } = this.props;
    return (
      <div>
        <Tip avatar={this.state.avatarIcon} />
        <Grid
          data={data}
          columnNum={5}
          onClick={avatar => {
            this.setState({
              avatarIcon: avatar.icon
            });
            selectAvatar(avatar.text);
          }}
        />
      </div>
    );
  }
}

export default Avatar;
