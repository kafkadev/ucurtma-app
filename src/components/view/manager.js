import React, { useEffect, useContext } from 'react';
import {
  useParams,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { User, List } from 'react-feather';
import { Box, Flex } from '@chakra-ui/core';
import Header from '../ui/header';
import Container from '../ui/container';
import SidebarItem from '../ui/sidebar-item';
import ContractActions from './admin/contract-actions';
import ContractList from './admin/contract-list';
import './manager.css';
import { MainContext } from '../../context/main-context';

function Manager() {
  const { state: mainState } = useContext(MainContext);
  const params = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation(['admin', 'editor']);

  const navItems = [
    { href: 'deploy', icon: User, label: t('ContractActions') },
    { href: 'campaigns', icon: List, label: t('CampaignsActions') },
  ];

  useEffect(() => {
    if (!params['*']) {
      navigate('deploy', { replace: true });
    }
  });

  const changePage = href => {
    navigate(href);
  };

  return (
    <>
      <Header withLogo hideMenu isManager mb={8} />
      <Container>
        <Flex
          w="full"
          transform="none"
          flexDir={{ base: 'column', md: 'row' }}
          mt={4}
        >
          <Box w="full" maxW={{ base: '100%', md: '276px' }}>
            {navItems.map((navItem, i) => (
              <SidebarItem
                icon={navItem.icon}
                key={i.toString()}
                label={navItem.label}
                active={navItem.href === params['*']}
                onClick={() => changePage(navItem.href)}
              />
            ))}
          </Box>
          <Box w="full">
            <Routes>
              <Route
                path="deploy"
                element={<ContractActions walletState={mainState} />}
              />
              <Route path="campaigns" element={<ContractList />} />
              <Route path="*" element={<Navigate to="deploy" replace />} />
            </Routes>
          </Box>
        </Flex>
      </Container>
    </>
  );
}

export default Manager;
