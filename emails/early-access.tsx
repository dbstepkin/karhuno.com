import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Button,
  Hr,
  Img,
} from "@react-email/components";
import * as React from "react";

export default function KarhunoEarlyAccessEmail() {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={logoSection}>
            <Img
              src="https://karhuno-ai.vercel.app/_next/image?url=%2Fimages%2FlogoWtext.png&w=384&q=75"
              alt="Karhuno Logo"
            />
          </Section>

          <Text style={subtitle}>🎉 Welcome to Karhuno AI Early Access!</Text>

          <Hr style={divider} />

          <Text style={text}>
            Thanks for joining our early access program! You're now on the list to be one of the first to experience Karhuno AI.
          </Text>

          <Text style={highlightBox}>
            🎁 <strong>You'll receive 1,000 free credits</strong> when your account is activated!
          </Text>

          <Text style={text}>
            Here's what happens next:
          </Text>

          <Text style={listItem}>
            <strong>1.</strong> We're currently onboarding users gradually to ensure the best experience for everyone.
          </Text>

          <Text style={listItem}>
            <strong>2.</strong> You'll receive an email notification as soon as your account is ready.
          </Text>

          <Text style={listItem}>
            <strong>3.</strong> Once activated, you can start discovering high-intent B2B signals immediately.
          </Text>

          <Text style={listItem}>
            <strong>4.</strong> Your 1,000 free credits will be automatically added to your account.
          </Text>

          <Text style={text}>
            <strong>Don't forget to check your spam folder</strong> so you don't miss our activation email!
          </Text>

          <Section style={buttonContainer}>
            <Button
              href="https://karhuno.com"
              style={button}
            >
              Visit Karhuno AI
            </Button>
          </Section>

          <Hr style={divider} />

          <Text style={footer}>
            Questions? Just reply to this email - we'd love to help! 🐻
            <br />
            <br />
            Best regards,
            <br />
            The Karhuno AI Team
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: "#f3f4f6",
  padding: "40px 0",
  textAlign: "center" as const,
};

const container = {
  maxWidth: "600px",
  backgroundColor: "#ffffff",
  padding: "30px",
  borderRadius: "8px",
  margin: "0 auto",
  textAlign: "center" as const,
};

const logoSection = {
  display: "flex",
  justifyContent: "center",
};

const subtitle = {
  fontSize: "24px",
  color: "#6A0DAD",
  fontWeight: "bold",
  textAlign: "center" as const,
  margin: "20px 0",
};

const divider = {
  margin: "20px auto",
  borderTop: "1px solid #e0e0e0",
  width: "100%",
};

const text = {
  fontSize: "16px",
  color: "#333",
  margin: "15px 0",
  textAlign: "center" as const,
  lineHeight: "1.5",
};

const highlightBox = {
  fontSize: "16px",
  color: "#6A0DAD",
  fontWeight: "bold",
  backgroundColor: "#f8f4ff",
  padding: "15px",
  borderRadius: "8px",
  margin: "20px 0",
  textAlign: "center" as const,
  border: "2px solid #e0d4ff",
};

const listItem = {
  fontSize: "15px",
  color: "#333",
  margin: "12px auto",
  textAlign: "left" as const,
  maxWidth: "500px",
  lineHeight: "1.5",
};

const buttonContainer = {
  marginTop: "30px",
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#6A0DAD",
  color: "#fff",
  padding: "14px 28px",
  textDecoration: "none",
  borderRadius: "12px",
  fontWeight: "bold",
  display: "inline-block",
  textAlign: "center" as const,
  fontSize: "16px",
};

const footer = {
  fontSize: "14px",
  color: "#666",
  margin: "20px 0",
  textAlign: "center" as const,
  lineHeight: "1.5",
}; 