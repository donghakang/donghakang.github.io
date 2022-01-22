import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Typography,
  styled,
} from "@mui/material";

interface ProjectDialogProps {
  open: boolean;
  onClose: () => void;
  demo?: string[];
  link?: string;
  content: { title: string; image: string; data: string };
}

const ProjectDialog: React.FC<ProjectDialogProps> = ({
  open,
  onClose,
  content,
  link,
  demo,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle
        id="alert-dialog-title"
        sx={{ fontWeight: 700, letterSpacing: -0.3, fontSize: "2em" }}
      >
        {content.title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <img
            src={`img/${content.image}`}
            alt="react"
            style={{
              margin: "auto",
              maxWidth: "720px",
              width: "100%",
              height: "100%",
            }}
          />
          <Typography
            dangerouslySetInnerHTML={{ __html: content.data }}
          ></Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        {link && (
          <Button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = link;
            }}
          >
            Link
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default ProjectDialog;