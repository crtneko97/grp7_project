import { NextPage } from 'next'
import { useSession } from 'next-auth/react';
import Router from 'next/router';
import { useEffect } from 'react';

interface Props {
  authenticatedComponent: JSX.Element;
  unauthenticatedComponent: JSX.Element;
}

const Protected: NextPage<Props> = ({
  authenticatedComponent,
  unauthenticatedComponent,
}): JSX.Element => {
  const { status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') Router.replace('/auth/signin');
  }, [status]);

  return status === 'authenticated'
    ? authenticatedComponent
    : unauthenticatedComponent;
};

export default Protected;