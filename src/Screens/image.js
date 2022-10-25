import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Container = styled.View`
    align-self:center;
    margin-bottom: 30px;
`;
const StyledImage = styled.Image`
    background-color: $({{theme}) => theme.gray};
    width: 100px;
    height: 100px;
    border-radius:${({rounded}) => (rounded ? 50:0)}px;
`;

const ButtonContainer = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.gray}
    position: absolute;
    bottom:0;
    right:0;
    width:30px;
    height:30px;
    border-radius: 15px;
    justify-content: center;
    align-items:center;
`;

const Image = ({url,imageStyle,rounded})=>{
    return(
        <Container>
            <StyledImage source= {{ url:url }} style={imageStyle} rounded={rounded} />
        </Container>
    );
};

Image.defaultProps={
    rounded: false,
};

Image.PropTypes={
    url : PropTypes.string,
    imageStyle:PropTypes.object,
    rounded:PropTypes.bool,
};

export default Image;