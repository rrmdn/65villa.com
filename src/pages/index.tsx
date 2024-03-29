import Head from "next/head";
import Image from "next/image";
import { GetStaticPropsContext } from "next";
import loadLocale from "@/i18n/loadLocale";
import { useTranslations } from "next-intl";
import { Col, Row, Typography, Grid, Divider, Button, Space } from "antd/lib";

import depanJpg from "../../public/images/depan.jpg";
import lantai1Jpg from "../../public/images/lantai1.jpg";
import lantai2Jpg from "../../public/images/lantai2.jpg";
import rooftopJpg from "../../public/images/rooftop.jpg";
import dynamic from "next/dynamic";
import React from "react";
import Icon from "@ant-design/icons/lib/components/Icon";
import {
  BiLocationPlus,
  BiLogoAirbnb,
  BiLogoWhatsapp,
  BiMapAlt,
  BiMapPin,
} from "react-icons/bi";

export const runtime = "edge";

const { useBreakpoint } = Grid;

const VillaMap = dynamic(() => import("@/components/VillaMap"), {
  ssr: false,
});

const sectionStyle: React.CSSProperties = {
  maxWidth: 1024,
  margin: "0 auto",
  padding: 32,
};

export default function Home() {
  const t = useTranslations("General");
  const breakPoint = useBreakpoint();
  const isMobile = !breakPoint.md;
  const reverseSectionStyle = React.useMemo(() => {
    return {
      ...sectionStyle,
      ...(isMobile
        ? {
            flexDirection: "column-reverse",
          }
        : {}),
    } as React.CSSProperties;
  }, [isMobile]);
  return (
    <>
      <Head>
        <title>{t("Title.plain")}</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row gutter={[12, 12]} style={sectionStyle}>
        <Col
          md={24}
          style={{
            textAlign: "center",
          }}
        >
          <Typography.Title level={1}>
            <span
              dangerouslySetInnerHTML={{
                __html: t.raw("DepanTitle.handlebars"),
              }}
            ></span>
          </Typography.Title>
          <Typography.Paragraph>
            <span
              dangerouslySetInnerHTML={{
                __html: t.raw("DepanCaption.handlebars"),
              }}
            ></span>
          </Typography.Paragraph>
        </Col>
      </Row>
      <Divider />
      <Row gutter={[12, 12]} style={sectionStyle}>
        <Col
          md={12}
          sm={24}
          style={{
            alignSelf: "center",
          }}
        >
          <Typography.Title level={2}>{t("Welcome.plain")}</Typography.Title>
          <Typography.Paragraph>{t("WelcomeText.plain")}</Typography.Paragraph>
        </Col>
        <Col md={12} sm={24} style={{ position: "relative" }}>
          <Image
            width={480}
            style={{
              borderRadius: 4,
              boxShadow: "0 0 8px rgba(0,0,0,0.06)",
              border: "1px solid #eee",
              width: "100%",
              height: "auto",
            }}
            alt={t("DepanTitle.plain")}
            src={depanJpg}
          />
        </Col>
      </Row>
      <Row gutter={[12, 12]} style={sectionStyle}>
        <Col
          md={24}
          sm={24}
          style={{
            textAlign: "center",
          }}
        >
          <Typography.Title level={3}>
            {t("LocationTitle.plain")}
          </Typography.Title>
          <Typography.Paragraph>
            {t("LocationCaption.plain")}
          </Typography.Paragraph>
          <a href="https://maps.app.goo.gl/BCTPCJbPMaDKPpq56" target="_blank">
            <Button icon={<Icon component={BiMapAlt} />} type="primary">
              {t("LocationDirection.plain")}
            </Button>
          </a>
        </Col>
      </Row>
      <div style={{ height: 380 }}>
        <VillaMap />
      </div>
      <Row gutter={[12, 12]} style={reverseSectionStyle}>
        <Col md={12} sm={24} style={{ position: "relative" }}>
          <Image
            width={480}
            style={{
              borderRadius: 4,
              boxShadow: "0 0 8px rgba(0,0,0,0.06)",
              border: "1px solid #eee",
              width: "100%",
              height: "auto",
            }}
            alt={t("Laintai1Title.plain")}
            src={lantai1Jpg}
          />
        </Col>
        <Col
          md={12}
          sm={24}
          style={{
            alignSelf: "center",
          }}
        >
          <Typography.Title level={2}>
            {t("Laintai1Title.plain")}
          </Typography.Title>
          <Typography.Paragraph>
            {t("Laintai1Caption.plain")}
          </Typography.Paragraph>
        </Col>
      </Row>
      <Divider />
      <Row gutter={[12, 12]} style={sectionStyle}>
        <Col
          md={12}
          sm={24}
          style={{
            alignSelf: "center",
          }}
        >
          <Typography.Title level={2}>
            {t("Laintai2Title.plain")}
          </Typography.Title>
          <Typography.Paragraph>
            {t("Lantai2Caption.plain")}
          </Typography.Paragraph>
        </Col>
        <Col md={12} sm={24} style={{ position: "relative" }}>
          <Image
            width={480}
            style={{
              borderRadius: 4,
              boxShadow: "0 0 8px rgba(0,0,0,0.06)",
              border: "1px solid #eee",
              width: "100%",
              height: "auto",
            }}
            alt={t("Laintai2Title.plain")}
            src={lantai2Jpg}
          />
        </Col>
      </Row>
      <Divider />
      <Row gutter={[12, 12]} style={reverseSectionStyle}>
        <Col md={12} sm={24} style={{ position: "relative" }}>
          <Image
            width={480}
            style={{
              borderRadius: 4,
              boxShadow: "0 0 8px rgba(0,0,0,0.06)",
              border: "1px solid #eee",
              width: "100%",
              height: "auto",
            }}
            alt={t("RooftopTitle.plain")}
            src={rooftopJpg}
          />
        </Col>
        <Col
          md={12}
          sm={24}
          style={{
            alignSelf: "center",
          }}
        >
          <Typography.Title level={2}>
            {t("RooftopTitle.plain")}
          </Typography.Title>
          <Typography.Paragraph>
            {t("RooftopCaption.plain")}
          </Typography.Paragraph>
        </Col>
      </Row>
      <Divider />
      <Row gutter={[12, 12]} style={sectionStyle}>
        <Col
          md={24}
          style={{
            textAlign: "center",
          }}
        >
          <Typography.Title level={1}>{t("CTATitle.plain")}</Typography.Title>
          <Typography.Paragraph>{t("CTACaption.plain")}</Typography.Paragraph>
          <Space>
            <a href="https://wa.me/+6285648499332" target="_blank">
              <Button
                style={{
                  backgroundColor: "#25D366",
                  borderColor: "#25D366",
                  color: "#fff",
                }}
                icon={<Icon component={BiLogoWhatsapp} />}
              >
                {t("CTAButtonWhatsApp.plain")}
              </Button>
            </a>
            <a href="https://airbnb.com/h/pbr65villa" target="_blank">
              <Button type="primary" icon={<Icon component={BiLogoAirbnb} />}>
                {t("CTAButtonAirBnB.plain")}
              </Button>
            </a>
          </Space>
        </Col>
      </Row>
      <Divider />
      <Row gutter={[12, 12]} style={sectionStyle}>
        <Col md={24} style={{ textAlign: "center" }}>
          <Typography.Paragraph>
            Copy right © 2024 65Villa. All rights reserved.
          </Typography.Paragraph>
          <Typography.Paragraph>
            <a href="https://instagram.com/65_villa" target="_blank">
              Instagram
            </a>{" "}
            ·{" "}
            <a href="airbnb.com/h/pbr65villa" target="_blank">
              AirBnB
            </a>{" "}
            ·{" "}
            <a href="https://wa.me/+6285648499332" target="_blank">
              WhatsApp
            </a>
          </Typography.Paragraph>
          <Typography.Paragraph>
            <a href="/">English</a> · <a href="/id-ID">Bahasa Indonesia</a>
          </Typography.Paragraph>
        </Col>
      </Row>
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      messages: await loadLocale(context.locale as string),
    },
  };
}
