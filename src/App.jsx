import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './components';
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from './pages';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          {/* dashboard */}
          <Route index element={<Navigate replace to='/ecommerce' />} />
          <Route path='/ecommerce' element={<Ecommerce />} />
          {/* pages */}
          <Route path='/orders' element={<Orders />} />
          <Route path='/employees' element={<Employees />} />
          <Route path='/customers' element={<Customers />} />

          {/* apps */}
          <Route path='/kanban' element={<Kanban />} />
          <Route path='/editor' element={<Editor />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/color-picker' element={<ColorPicker />} />

          {/* Charts */}
          <Route path='/line' element={<Line />} />
          <Route path='/area' element={<Area />} />
          <Route path='/bar' element={<Bar />} />
          <Route path='/pie' element={<Pie />} />
          <Route path='/financial' element={<Financial />} />
          <Route path='/color-mapping' element={<ColorMapping />} />
          <Route path='/pyramid' element={<Pyramid />} />
          <Route path='/stacked' element={<Stacked />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
