import React, { useState } from "react";

export const useClientPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return { useClientPage, open, handleOpen, handleClose };
};
