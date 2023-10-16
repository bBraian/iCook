import styled from "styled-components"

export const Container = styled.div`
    padding: 0 1rem;
    margin-top: 92px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
`

export const Title = styled.div`
    color: ${props => props.theme['neutral-90']};
    font-size: 24px;
    font-weight: 600;
    line-height: 28.80px;
    word-wrap: break-word;
`

export const BookmarkButton = styled.button`
    height: 44px;
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 10px;
    background-color: ${props => props.theme['primary-50']};
`

export const ImgContainer = styled.div`
    margin-top: 1rem;
    position: relative;
    display: 'flex';
    width: 100%;
    height: 200px;
    border-radius: 10px;
    overflow: hidden;
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const ServesCounterBox = styled.div`
    position: absolute;
    top: 10px;
    left: 8px;
    width: 55px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    border-radius: 8px;
    background: rgba(48, 48, 48, 0.30);

    color: ${props => props.theme['white-0']};
    font-size: 14px;
    font-weight: 600;
    line-height: 19px;
`

export const UserInfos = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
`

export const Review = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
`

export const Avatar = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
`

export const Username = styled.div`
    color: ${props => props.theme['neutral-100']};
    font-size: 16px;
    font-weight: 600;
    line-height: 22.40px;
    word-wrap: break-word;
`


export const Stars = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
    justify-content: center;
    color: ${props => props.theme['neutral-90']};
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
`

export const ReviewsCounter = styled.div`
    color: ${props => props.theme['neutral-40']};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const RatingText = styled.span`
    color: ${props => props.theme['neutral-40']};
    font-size: 16px;
    font-weight: 400;
    line-height: 22.40px;
    word-wrap: break-word;
`

export const RatingStarsBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 3px;
    align-items: center;
`

export const RateButton = styled.button`
    width: 24px;
    height: 24px;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
`

