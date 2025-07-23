import styled from 'styled-components'

export const GithubSecao = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
  margin-bottom: 64px;
  justify-content: center;

  img {
    height: 195px;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    img {
      width: 100%;
      max-width: 400px;
      height: auto;
    }
  }
`
