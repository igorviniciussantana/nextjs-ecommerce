import styled from 'styled-components'

export const SlideBox = styled.div`
.swiper-button {
    &-prev, &-next {
        top: 50%;
        transform: translateY(-50%);
        color: white;
        background: black;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        &:after{
            font-size: 1.3rem;
            margin: 0 -3px -3px 0;
        }
    }
    &-prev {
        &:after {
            margin: 0 -3px 0 --3px;
        }
    }
}
`