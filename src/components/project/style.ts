import styled from '@emotion/styled'

export const ProjectItem = styled.li<{ opened: boolean }>`
  border-bottom: 1px solid var(--primary);

  text-transform: uppercase;

  .title {
    margin: 0;
    padding: 0;
    font-weight: 300;
    display: flex;
    align-items: center;

    .main-image-wrapper {
      position: relative;
      height: 80px;
      width: 0;
      overflow: hidden;

      margin-right: 0;

      .preview-image {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        object-fit: cover;
      }
    }
  }

  .content {
    overflow: hidden;
    transition: all 200ms ease-in-out;
    max-height: ${({ opened }) => (opened ? '100vh' : '0vh')};

    // Swiper
    .swiper {
      margin: 2rem 0;
      width: 100%;
      height: 100%;
      .swiper-wrapper {
        display: flex;
        width: 100%;
        .swiper-slide {
          display: flex;
          align-items: flex-end;
          .thumb-wrapper {
            position: relative;

            img {
              width: 100%;
              height: 100%;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              object-fit: cover;
            }
          }
        }
      }
    }

    .date-text {
      font-size: 1rem;
    }
  }

  ${({ theme }) => theme.screen.xs} {
    overflow: hidden;
    position: relative;
    padding: 1rem;
    .phone-view-image {
      transition: opacity 400ms ease-in-out;
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      object-fit: cover;
      opacity: 0;
    }
    .title {
      z-index: 9;
      position: relative;
      font-size: 2rem;

      .preview-image {
        display: none;
      }
    }
    &:hover {
      .phone-view-image {
        opacity: ${({ opened }) => (opened ? 0 : 1)};
      }
    }

    .content {
      // Swiper
      .swiper {
        .swiper-wrapper {
          .swiper-slide {
            .thumb-wrapper {
              width: 300px;
              height: 200px;
            }
          }
        }
      }
    }
  }
  ${({ theme }) => theme.screen.s} {
    overflow: hidden;
    position: relative;
    padding: 1rem;
    .phone-view-image {
      transition: opacity 400ms ease-in-out;
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      object-fit: cover;
      opacity: 0;
    }
    .title {
      z-index: 9;
      position: relative;
      font-size: 2rem;

      .preview-image {
        display: none;
      }
    }
    &:hover {
      .phone-view-image {
        opacity: ${({ opened }) => (opened ? 0 : 1)};
      }
    }

    .content {
      // Swiper
      .swiper {
        .swiper-wrapper {
          .swiper-slide {
            .thumb-wrapper {
              width: 300px;
              height: 200px;
            }
          }
        }
      }
    }
  }
  ${({ theme }) => theme.screen.m} {
    padding: 2rem;
    .phone-view-image {
      display: none;
    }
    .title {
      font-size: 3rem;
      .preview-image {
        display: block;
      }
    }

    &:hover {
      .title {
        .main-image-wrapper {
          position: relative;
          width: ${({ opened }) => (opened ? '0' : '150px')};
          height: 80px;
          margin-right: ${({ opened }) => (opened ? '0' : '2rem')};
          transition: width 400ms ease-in-out, margin-right 400ms ease-in-out;
          .preview-image {
            transform: translate(-50%, -50%);
          }
        }
      }
    }
    .content {
      // Swiper
      .swiper {
        .swiper-wrapper {
          .swiper-slide {
            .thumb-wrapper {
              width: 600px;
              height: 400px;
            }
          }
        }
      }
    }
  }
`

export const TechStack = styled.div`
  display: flex;
  list-style-type: none;
  margin: 0.875rem 0;
  gap: 8px;
  .tech-name {
    border: 1px solid var(--primary);
    border-radius: 1rem;
    padding: 0.4rem 0.6rem;
    font-size: 14px;
    font-weight: 300;
    color: var(--primary);
  }
`

export const ProjectDescription = styled.div`
  font-size: 1rem;
  text-transform: none;
  font-weight: 200;
`
