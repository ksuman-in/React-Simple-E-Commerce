import styled from "styled-components";

export const ProductWrapper = styled.div`
  .card {
    transition: all 0.5s linear;
    .img-container {
      position: relative;
      overflow: hidden;
      transition: all 0.5s linear;
      .card-img-top {
        transition: all 0.5s linear;
      }
      .card-btn {
        position: absolute;
        bottom: 0;
        right: 0;
        background: var(--lightBlue);
        color: var(--mainWhite);
        border: none;
        padding: 0.2rem 0.5rem;
        transform: translate(100%, 100%);
        transition: all 0.5s linear;
        border-radius: 0.5rem 0 0 0;
        &:hover {
          color: var(--mainBlue);
          cursor: pointer;
        }
      }
      &:hover {
        .card-img-top {
          transform: scale(1.2);
        }
        .card-btn {
          transform: translate(0, 0);
        }
      }
    }
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.5s linear;
  }
  &:hover {
    card {
      border: 0.5rem solid rgba(0, 0, 0, 0.3);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.3);
    }
    .card-footer {
      background: var(--mainYellow);
      color: var(--mainWhite);
    }
  }
`;

export default ProductWrapper;
