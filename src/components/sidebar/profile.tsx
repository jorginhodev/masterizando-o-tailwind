import { LogOut } from 'lucide-react'
import Image from 'next/image'

export const Profile = () => {
  return (
    <div className="grid-cols-profile grid items-center gap-3">
      <Image
        src="https://github.com/jorginhodev.png"
        className="h-10 w-10 rounded-full"
        alt="Imagem de perfil do usuário"
        width={40}
        height={40}
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">Jorge Ramos</span>
        <span className="truncate text-sm text-zinc-500">
          contato@jorgeramos.me
        </span>
      </div>

      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
