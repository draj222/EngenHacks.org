import { styled, css } from "~stitches";
import { Subtitle, DisplayText, Body, ApplyButton } from "@components/atoms";

const Wrapper = styled('div', {
  display: "flex",
  paddingTop: "25vh",
  flexDirection: "column",
  minHeight: "100vh",
  width: "100%",
  zIndex: "10",
})

export const Hero = (props) => {
  return(
    <Wrapper>
      <Subtitle>
        September 2nd&nbsp;&nbsp;|
        <span
          style={{'color': 'White'}}
        >
        &nbsp;&nbsp;Cali, US + Online.
        </span>
      </Subtitle>
      <DisplayText>Engen Hacks</DisplayText>

      
      <ApplyButton/>
      <Body><a href='mailto:sponsors@engenhacks.org' style={{color: "#ffff", "textDecoration": "underline"}}>Interested in sponsoring?</a></Body>
    </Wrapper>
  )
}