import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Header,
  Image,
  Item,
  ItemContent,
  ItemGroup,
  Segment,
  SegmentGroup,
} from "semantic-ui-react";

const eventImageStyle = {
  filter: "brightness(30%)",
};

const eventImageTextStyle = {
  position: "absolute",
  bottom: "5%",
  left: "5%",
  width: "100%",
  height: "auto",
  color: "white",
};

export default function EventDetailedHeader() {
  return (
    <SegmentGroup>
      <Segment basic attached="top" style={{ padding: "0" }}>
        <Image
          src={`/assets/categoryImages/cinema.jpg`}
          fluid
          style={eventImageStyle}
        />

        <Segment basic style={eventImageTextStyle}>
          <ItemGroup>
            <Item>
              <ItemContent>
                <Header
                  size="huge"
                  content="Event Title"
                  style={{ color: "white" }}
                />
                <p>Event Date</p>
                <p>
                  Hosted by <strong>Bela</strong>
                </p>
              </ItemContent>
            </Item>
          </ItemGroup>
        </Segment>
      </Segment>

      <Segment attached="bottom">
        <Button>Cancel My Place</Button>
        <Button color="teal">JOIN THIS EVENT</Button>
        <Button as={Link} to={`/manage/`} color="orange" floated="right">
          Manage Event
        </Button>
      </Segment>
    </SegmentGroup>
  );
}
