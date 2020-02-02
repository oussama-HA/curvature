// tslint:disable:no-http-string
import { Link } from 'gatsby';
import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';


import { SocialLink } from '../../styles/shared';
import config from '../../website-config';
import Facebook from '../icons/facebook';
import Twitter from '../icons/twitter';
import SubscribeModal from '../subscribe/SubscribeOverlay';
import SiteNavLogo from './SiteNavLogo';


const NavContent = css`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  background: #090a0b;
  display: flex;
  padding: 0 5vw;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    z-index: 1000;
    width: 40px;
    height: 100%;
  }

  &:after {
    right: 0;
    background: linear-gradient(to right, transparent 0%, #090a0b88 30%, #090a0bBB 70%, #090a0bEE 100%);
  }


  @media (max-width: 700px){
    padding-right: 0;
    padding-left: 0;
  }
`;

const HomeNavRaise = css`
  z-index: 100;
  max-width: 1040px;
`;

const SiteNavStyles = css`
  position: relative;
  z-index: 100;
  width: 100%;
  
  display: flex;
  max-width: 1040px;
  justify-content: space-between;
  align-items: flex-start;
  overflow-y: hidden;
  height: 64px;
  font-size: 1.3rem;

  @media (max-width: 700px){
    margin-right: 0;
    padding-left: 5vw;
  }
`;

const SiteNavLeftWrap = css`
  position: relative;
  flex: 1 0 auto;
  display: flex;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  @media (max-width: 700px) {
    top: 1rem;
    align-items:center;
    padding: 20px 0 80px 0;
  }
`;

// const NavStylesLeft = css`
//   position:relative;
//   display:none;
// `

const NavStylesLogo = css`
  position:relative;
  padding:10px 36px 10px 0px;
  @media (max-width: 700px) {
    padding:18px 0px 10px 20px;
    // padding-left:2rem;
    // padding-right:0;
    left: -4rem;

        
  }
`
  


const SiteNavLeft = styled.div`
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  // overflow-x: auto;
  // overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  margin-right: 10px;
  padding: 0;

  font-weight: 500;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  white-space: nowrap;

  -ms-overflow-scrolling: touch;

  .nav li:last-of-type {
    padding-right: 20px;
  }

  @media (max-width: 700px) {
    padding-left: 1rem;
    justify-content: center;
  }

  @media (max-width: 350px) {
    padding-left: 5rem;
  }

`;



const NavStyles = css`
  position: absolute;
  z-index: 1000;
  display: flex;
  margin: 0 0 0 -12px;
  padding: 0;
  list-style: none;
  transition: all 1.0s cubic-bezier(0.19, 1, 0.22, 1);
  
  li {
    display: block;
    margin: 0;
    padding: 0;
  }

  li a {
      position: relative;
      display: block;
      padding: 12px 12px;
      color: #fff;
      opacity: 0.8;
      transition: opacity 0.35s ease-in-out;
  }

  li a:hover {
      text-decoration: none;
      opacity: 1;
  }

  li a:before {
      content: "";
      position: absolute;
      right: 100%;
      bottom: 8px;
      left: 12px;
      height: 1px;
      background: #fff;
      opacity: 0.25;
      transition: all 0.35s ease-in-out;
  }

  li a:hover:before {
      right: 12px;
      opacity: 0.5;
  }

  @media (max-width: 700px) {
    width: 80%;
    justify-content: center;
  }

  @media (max-width: 350px) {
    width: 100%;
    justify-content: center;
  }
`;

const SiteNavRight = styled.div`
  flex: 0 1 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 0;
  height: 64px;

  nav {
    position: relative;
    margin: 0;
  }

  nav a {
      white-space: nowrap;
  }

  nav a:before {
      display: none;
  }

  nav li:last-of-type a {
      margin-right: -12px;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

const SocialLinks = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  a:last-of-type {
    padding-right: 20px;
  }

`;


const SubscribeButton = styled.a`
  /*display: block;
  padding: 4px 10px;
  border: #fff 1px solid;
  color: #fff;
  font-size: 1.2rem;
  line-height: 1em;
  border-radius: 10px;
  opacity: 0.8;*/

  display: block;
  padding: 5px 10px 7px 10px;
  margin: 0 0 0 10px;
  border: #fff 2px solid;
  color: #fff;
  line-height: 1em;
  border-radius: 7px;
  opacity: 0.8;

  :hover {
    text-decoration: none;
    opacity: 1;
    cursor: pointer;
  }
  
  `;



interface SiteNavProps {
  isHome?: boolean;
}

class SiteNav extends React.Component<SiteNavProps> {
  subscribe = React.createRef<SubscribeModal>();

  openModal = () => {
    if (this.subscribe.current) {
      this.subscribe.current.open();
    }
  };

  render() {
    const { isHome = false } = this.props;
    return (
      <div css={NavContent}>
        <nav css={[isHome && HomeNavRaise, SiteNavStyles]}>
          <div css={SiteNavLeftWrap}>
            {!isHome && 
              <div  css={NavStylesLogo}>
                <SiteNavLogo />
              </div>}
            
            <SiteNavLeft>
              
              
              {/* <SiteNavLogo /> */}
              <ul css={NavStyles} role="menu">
                {/* TODO: mark current nav item - add class nav-current */}
                <li role="menuitem">
                  <Link to="/">Home</Link>
                </li>
                <li role="menuitem">
                  <Link to="/about">About Us</Link>
                </li>
                <li role="menuitem">
                  <Link to="/PrivacyPolicy">Privacy Policy</Link>
                </li>
              </ul>
            
            </SiteNavLeft>
          </div>
          
          <SiteNavRight>
            <SocialLinks>
              {config.facebook && (
                <a
                  css={SocialLink}
                  href={config.facebook}
                  target="_blank"
                  title="Facebook"
                  rel="noopener noreferrer"
                >
                  <Facebook />
                </a>
              )}
              {config.twitter && (
                <a
                  css={SocialLink}
                  href={config.twitter}
                  title="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter />
                </a>
              )}
            </SocialLinks>
            {config.showSubscribe && (
              <SubscribeButton onClick={this.openModal}>Subscribe</SubscribeButton>
            )}
            {config.showSubscribe && <SubscribeModal ref={this.subscribe} />}
          </SiteNavRight>
      </nav>
      </div>
      
    );
  }
}



export default SiteNav;


