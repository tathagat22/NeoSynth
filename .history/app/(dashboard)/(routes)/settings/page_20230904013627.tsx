import { Heading } from "@/components/heading";
import { Settings } from "lucide-react";

const SettingPage = () => {
    return ( 
        <div>
            <Heading 
            title="Settings"
            description="Manage account settings."
            icon={Settings}
            iconColor="text-gray-700"
            />
        </div>
     );
}
 
export default SettingPage;