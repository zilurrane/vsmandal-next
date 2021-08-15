import { useState } from "react";

export default function useHandlePayment() {
  const [activeTab, setActiveTab] = useState(1);

  function switchTab() {
    setActiveTab(activeTab == 1 ? 2 : 1);
  }

  return { activeTab, switchTab };
}
