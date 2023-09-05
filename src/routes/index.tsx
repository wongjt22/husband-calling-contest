import { useRoutes, Navigate } from 'react-router-dom';

import { Landing } from '@/features/landing';
import { Contestants } from '@/features/contestants';
import { About } from '@/features/about';

export const AppRoutes = () => {

  const routes = [
      { path: '/', element: <Landing /> },
      { path: '/about', element: <About /> },
      { path: '/contestants', element: <Contestants /> },
      { path: '*', element: <Navigate to="." /> },
    ]

  const element = useRoutes([...routes]);

  return <>{element}</>;
};
