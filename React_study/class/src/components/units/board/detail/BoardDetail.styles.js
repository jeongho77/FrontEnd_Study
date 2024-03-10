import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
  padding: 80px 100px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  box-shadow: gray;
  border-radius: 20px;
  background-color: white;
`;

export const Header = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 40px 0px;
  border-bottom: 1px solid gray;
  background-color: white;
  justify-content: space-between;
`;

export const Profile_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Profile_image = styled.img`
  margin-left: 10px;
  padding-right: 20px;
  width: 80px;
  background-size: cover;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 15px;
`;

export const Writer = styled.div`
  font-size: 25px;
`;

export const Date = styled.div`
  font-size: 20px;
  color: gray;
`;

export const Link_Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Url_btn = styled.button`
  width: 40px;
  height: 40px;
  background-image: url(/images/ic_link-32px.png);
  background-repeat: no-repeat;
  background-size: cover;
  border: 0;
  margin-right: 10px;
`;

export const Map_btn = styled.button`
  width: 40px;
  height: 40px;
  background-image: url(/images/ic_location_on-32px.png);
  background-repeat: no-repeat;
  background-size: cover;
  border: 0;
  margin-right: 10px;
`;

export const Content_Wrapper = styled.div`
  margin: 30px 10px;
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

export const Image = styled.img`
  padding-top: 40px;
  padding-bottom: 80px;
`;

export const Content = styled.text`
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 150px;
`;

export const Video = styled.img``;

export const Like_Wrapper = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Like = styled.img`
  width: 40px;
  height: 40px;
  background-image: url("/images/up.png");
  background-repeat: no-repeat;
  background-size: cover;
  border: 0;
`;

export const Like_button = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: 1px solid whitesmoke;
  cursor: pointer;
`;

export const Like_p = styled.p``;

export const Bad = styled.img`
  width: 40px;
  height: 40px;

  background-repeat: no-repeat;
  background-size: cover;
  border: 0;
`;
