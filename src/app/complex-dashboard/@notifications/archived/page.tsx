import { Card } from "@/app/components/card"
import Link from "next/link"

export default function ArchivedNotifications(){
    return (
    <div>
        <Card>
            <div>
                Archived Notification Empty!
            </div>
            <div>
                <Link href="/complex-dashboard">Default</Link>
            </div>
        </Card>
    </div>
    );
}