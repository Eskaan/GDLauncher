import React, { useState, lazy } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDiscord,
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import Modal from '../../components/Modal';
import AsyncComponent from '../../components/AsyncComponent';
import CloseButton from '../../components/CloseButton';
import { closeModal } from '../../reducers/modals/actions';
import KoFiButton from '../../assets/ko-fi.png';
import PatreonButton from '../../assets/patreon.png';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  text-align: center;

  .ant-slider-mark-text,
  .ant-input,
  .ant-select-selection-search-input,
  .ant-btn {
    -webkit-backface-visibility: hidden;
  }
`;
const SideMenu = styled.div`
  flex: 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: ${props => props.theme.palette.grey[800]};
  padding-top: calc(${props => props.theme.sizes.height.systemNavbar} + 5px);
`;

const SettingsContainer = styled.div`
  flex: 1;
  flex-grow: 3;
`;

const SettingsColumn = styled.div`
  margin-left: 50px;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

// eslint-disable-next-line react/jsx-props-no-spreading
const SettingsButton = styled(({ active, ...props }) => <Button {...props} />)`
  align-items: left;
  justify-content: left;
  text-align: left;
  width: 200px;
  height: 30px;
  border-radius: 4px 0 0 4px;
  font-size: 12px;
  white-space: nowrap;
  background: ${props =>
    props.active
      ? props.theme.palette.grey[600]
      : props.theme.palette.grey[800]};
  border: 0px;
  text-align: left;
  animation-duration: 0s;
  color: ${props => props.theme.palette.text.primary};
  &:hover {
    color: ${props => props.theme.palette.text.primary};
    background: ${props => props.theme.palette.grey[700]};
  }
  &:focus {
    color: ${props => props.theme.palette.text.primary};
    background: ${props => props.theme.palette.grey[600]};
  }
`;

const SettingsTitle = styled.div`
  margin-top: 15px;
  align-items: left;
  justify-content: left;
  text-align: left;
  width: 200px;
  height: 30px;
  border-radius: 4px 0 0 4px;
  font-size: 12px;
  font-weight: 300;
  white-space: nowrap;
  color: ${props => props.theme.palette.grey[50]};
`;

const pages = {
  General: {
    name: 'General',
    component: AsyncComponent(lazy(() => import('./components/General')))
  },
  Java: {
    name: 'Java',
    component: AsyncComponent(lazy(() => import('./components/Java')))
  }
};

export default function Settings() {
  const [page, setPage] = useState('General');
  const dispatch = useDispatch();
  const ContentComponent = pages[page].component;

  return (
    <Modal
      css={`
        height: 100%;
        width: 100%;
      `}
      header="false"
    >
      <Container>
        <CloseButton
          css={`
            position: absolute;
            top: 30px;
            right: 30px;
          `}
          onClick={() => dispatch(closeModal())}
        />
        <SideMenu>
          <SettingsTitle>General</SettingsTitle>
          {Object.values(pages).map(val => (
            <SettingsButton
              key={val.name}
              active={page === val.name}
              onClick={() => setPage(val.name)}
            >
              {val.name}
            </SettingsButton>
          ))}
          {/* <SettingsButton onClick={() => setPage("User Interface")}>
            User Interface
          </SettingsButton>
          <SettingsTitle>Game Settings</SettingsTitle>
          <SettingsButton>Graphic Settings</SettingsButton>
          <SettingsButton>Sound Settings</SettingsButton> */}
          <div
            css={`
              align-items: left;
              justify-content: left;
              text-align: left;
              width: 200px;
              position: absolute;
              bottom: 0;
            `}
          >
            <span
              css={`
                font-weight: bold;
                font-size: 16px;
              `}
            >
              Support GDLauncher
            </span>
            <div
              css={`
                img {
                  border-radius: 30px;
                  height: 40px;
                  cursor: pointer;
                  transition: transform 0.2s ease-in-out;
                  &:hover {
                    transform: scale(1.05);
                  }
                }
              `}
            >
              <a href="https://ko-fi.com/gdlauncher">
                <img
                  src={KoFiButton}
                  alt="Ko-Fi"
                  css={`
                    margin-bottom: 20px;
                    margin-top: 20px;
                  `}
                />
              </a>
              <a href="https://patreon.com/gorilladevs">
                <img src={PatreonButton} alt="Patreon" />
              </a>
            </div>
            <div
              css={`
                display: flex;
                margin-top: 20px;
                margin-bottom: 20px;
                a {
                  color: rgba(255, 255, 255, 0.85);
                }
                div {
                  padding: 6px;
                  border-radius: 4px;
                  &:hover {
                    background: rgba(255, 255, 255, 0.5);
                    transition: background 0.1s ease-in-out,
                      transform 0.1s ease-in-out;
                    transform: scale(1.2);
                    cursor: pointer;
                  }
                }
                div:first-child {
                  margin-left: 0;
                }
              `}
            >
              <a href="https://discord.gg/4cGYzen">
                <div>
                  <FontAwesomeIcon icon={faDiscord} size="lg" />
                </div>
              </a>
              <a href="https://github.com/gorilla-devs/GDLauncher">
                <div>
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </div>
              </a>
              <a href="https://twitter.com/gdlauncher">
                <div>
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </div>
              </a>
              <a href="https://facebook.com/gorilladevs">
                <div>
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </div>
              </a>
              <a href="https://instagram.com/gdlauncher">
                <div>
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </div>
              </a>
              <a href="https://gdevs.io">
                <div>
                  <FontAwesomeIcon icon={faGlobe} size="lg" />
                </div>
              </a>
            </div>
          </div>
        </SideMenu>
        <SettingsContainer>
          <SettingsColumn>
            <div
              css={`
                max-width: 600px;
                overflow-y: hidden;
                overflow-x: hidden;
              `}
            >
              <ContentComponent />
            </div>
          </SettingsColumn>
        </SettingsContainer>
      </Container>
    </Modal>
  );
}
