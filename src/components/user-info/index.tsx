import { useTelegramUser } from '@/shared/hooks'
import { t } from '@/shared/lib/i18n'

function getInitials(firstName: string, lastName?: string): string {
    const first = firstName?.[0]?.toUpperCase() || ''
    const last = lastName?.[0]?.toUpperCase() || ''
    return `${first}${last}` || '?'
}

function getFullName(firstName: string, lastName?: string): string {
    return lastName ? `${firstName} ${lastName}` : firstName
}

export function UserInfo() {
    const user = useTelegramUser()

    if (!user) {
        return (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-24 h-24 rounded-full bg-muted-foreground/20 flex items-center justify-center">
                    <span className="text-muted-foreground text-2xl">?</span>
                </div>
                <p className="text-sm text-muted-foreground">{t('user.info.notAvailable')}</p>
            </div>
        )
    }

    const fullName = getFullName(user.first_name, user.last_name)
    const initials = getInitials(user.first_name, user.last_name)

    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            {user.photo_url ? (
                <img
                    src={user.photo_url}
                    alt={fullName}
                    className="w-24 h-24 rounded-full object-cover"
                />
            ) : (
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium text-2xl">{initials}</span>
                </div>
            )}
            <div className="flex flex-col items-center gap-1">
                <p className="font-medium text-foreground">{fullName}</p>
                {user.username && (
                    <p className="text-sm text-muted-foreground">@{user.username}</p>
                )}
            </div>
        </div>
    )
}

