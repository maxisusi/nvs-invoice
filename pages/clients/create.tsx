import { CreateNewClient } from '@nvs-component/CreateNewClient';
import { TitleApp } from '@nvs-widget/TitleApp';
import React from 'react';

const create = () => (
  <>
    <TitleApp title="Create new clients" />
    <CreateNewClient />
  </>
);

export default create;
