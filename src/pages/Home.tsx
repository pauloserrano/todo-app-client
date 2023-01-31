import { Todos, Goals } from "../components"
import { MainLayout } from "../layouts/MainLayout"

const mock = [
  { id: 1, name: "Mobile App Design", description: "Lorem ipsum sid dolor amet" },
  { id: 2, name: "Mobile App Design", description: "Lorem ipsum sid dolor amet" },
  { id: 3, name: "Mobile App Design", description: "Lorem ipsum sid dolor amet" },
  { id: 4, name: "Mobile App Design", description: "Lorem ipsum sid dolor amet" },
]

export const Home = () => {
  return (
    <MainLayout>
      <MainLayout.Title>Everyday Your Task Plan</MainLayout.Title>
      <Goals />
      <MainLayout.Subtitle>On Going Tasks</MainLayout.Subtitle>
      <Todos data={mock} />
    </MainLayout>
  )
}
