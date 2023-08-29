import { styled, css } from "~stitches";
import { Subtitle, DisplayText, Body, ApplyButton } from "@components/atoms";

const Wrapper = styled('div', {
  display: "flex",
  paddingTop: "25vh",
  flexDirection: "column",
  minHeight: "75vh",
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
      <Body><a href='https://wyw9ezhbiai.typeform.com/to/GTMXHM4x' style={{color: "#ffff", "textDecoration": "underline"}}>Interested in sponsoring?</a></Body>
    </Wrapper>
  )
}