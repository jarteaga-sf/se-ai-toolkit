import PresentationShell from '@/components/core/PresentationShell'
import { slideManifest } from '@/content/slides'

export default function App() {
  return <PresentationShell sections={slideManifest} />
}
