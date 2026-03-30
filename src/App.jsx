import PresentationShell from '@/components/PresentationShell'
import { slideManifest } from '@/content/slides'

export default function App() {
  return <PresentationShell sections={slideManifest} />
}
