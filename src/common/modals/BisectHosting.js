import React, { memo } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Modal from '../components/Modal';
import BisectHostingLogo from '../../ui/BisectHosting';

const BisectHosting = () => {
  return (
    <Modal
      css={`
        height: 360px;
        width: 500px;
        font-size: 10px;
        line-height: 1.8;
      `}
      title="BisectHosting"
    >
      <Container>
        <BisectHostingLogo size={70} hover />
        <h2
          css={`
            margin-top: 20px;
          `}
        >
          Prenez un serveur avec notre partenaire officiel{' '}
          <span
            css={`
              font-weight: 800;
            `}
          >
            BisectHosting
          </span>{' '}
          <span>Pour des serveurs sans faire d'effort.</span> Les nouveaux client peuvent économiser{' '}
          <span
            css={`
              color: ${props => props.theme.palette.colors.green};
            `}
          >
            25%
          </span>{' '}
          pour leur premier mois avec le code{' '}
          <span
            css={`
              color: ${props => props.theme.palette.colors.green};
            `}
          >
            GDL
          </span>{' '}
          au checkout.
        </h2>
        <a href="https://bisecthosting.com/gdl">
          <Button
            type="primary"
            css={`
              margin-top: 25px;
            `}
          >
            Aller sur BisectHosting.com &nbsp;
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </Button>
        </a>
      </Container>
    </Modal>
  );
};

export default memo(BisectHosting);

const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  color: ${props => props.theme.palette.text.primary};
`;
