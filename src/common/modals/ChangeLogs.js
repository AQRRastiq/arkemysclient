/* eslint-disable react/no-unescaped-entities */
import React, { memo, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { ipcRenderer } from 'electron';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import Modal from '../components/Modal';

const ChangeLogs = () => {
  const [version, setVersion] = useState(null);

  useEffect(() => {
    ipcRenderer.invoke('getAppVersion').then(setVersion).catch(console.error);
  }, []);

  return (
    <Modal
      css={`
        height: 500px;
        width: 650px;
      `}
      title={`Quoi de neuf en ${version} ?`}
    >
      <Container>
        {/* <Section>
          <SectionTitle
            css={`
              color: ${props => props.theme.palette.colors.green};
            `}
          >
            <span>New Features</span>
          </SectionTitle>
          <div>
            <ul>
              <li>
                Automatically set recommended/minimum RAM amount for FTB
                modpacks, and eventually show a confirmation modal in case the
                user has not enough.
              </li>
              <li>Added modlist.html when exporting instances.</li>
            </ul>
          </div>
        </Section> */}
        <Section>
          <SectionTitle
            css={`
              color: ${props => props.theme.palette.colors.red};
            `}
          >
            <span>Fixs de bugs</span>
          </SectionTitle>
          <div>
            <ul>
              <li>Fix de la taille des logos.</li>
              <li>Phrases de connexion fixées.</li>
            </ul>
          </div>
        </Section>
        <Section>
          <SectionTitle
            css={`
              color: ${props => props.theme.palette.colors.lavander};
            `}
          >
            <span>Rejoindre notre communauté</span>
          </SectionTitle>
          <p>
            Nous adorons nos utilisateurs, voilà pourquoi nous avons un serveur Discord pour parler avec eux !
          </p>
          <Button
            css={`
              font-size: 20px;
              margin-top: 20px;
            `}
            type="primary"
            size="large"
            href="https://discord.gg/HHJvj6yWRW"
          >
            <FontAwesomeIcon icon={faDiscord} />
            &nbsp; Discord
          </Button>
        </Section>
      </Container>
    </Modal>
  );
};

export default memo(ChangeLogs);

const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  overflow-y: auto;
  color: ${props => props.theme.palette.text.primary};
`;

const SectionTitle = styled.h2`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid;
  line-height: 0.1em;
  margin: 10px 0 20px;

  span {
    background: ${props => props.theme.palette.secondary.main};
    padding: 0 10px;
  }
`;

const Section = styled.div`
  width: 100%;
  text-align: center;
  font-size: 16px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 40px 0;
    border-radius: 5px;

    p {
      margin: 20px 0;
    }

    li {
      text-align: start;
    }
  }
`;
