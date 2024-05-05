import { PageProvider } from './pages/provider/PageContext'
import { MainFrame } from './pages/MainFrame'

export const App = () => {
  return (
    <PageProvider>
      <MainFrame />
    </PageProvider>
  )
}
