import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsContactItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_contact_items';
  info: {
    displayName: 'ContactItem';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Component<'utilities.basic-image', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsHeroItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_hero_items';
  info: {
    displayName: 'HeroItem';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsOurProjectsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_our_projects_cards';
  info: {
    displayName: 'OurProjectsCard';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Component<'utilities.basic-image', false> &
      Schema.Attribute.Required;
    link: Schema.Attribute.Component<'utilities.basic-link', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    year: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface ElementsPricingItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_pricing_items';
  info: {
    displayName: 'PricingItem';
  };
  attributes: {
    price: Schema.Attribute.String & Schema.Attribute.Required;
    term: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsSectionHeaders extends Struct.ComponentSchema {
  collectionName: 'components_elements_section_headers';
  info: {
    displayName: 'SectionHeaders';
  };
  attributes: {
    headers: Schema.Attribute.Component<'elements.section-headers', false> &
      Schema.Attribute.Required;
    isCentered: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface ElementsStagesItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_stages_items';
  info: {
    displayName: 'StagesItem';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsTextCardsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_text_cards_cards';
  info: {
    displayName: 'TextCardsCard';
  };
  attributes: {
    badges: Schema.Attribute.Component<'utilities.text', true>;
    button: Schema.Attribute.Component<'utilities.basic-link', false> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Component<'utilities.basic-image', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsTextItemsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_text_items_cards';
  info: {
    displayName: 'TextItemsCard';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Component<'utilities.basic-image', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsTextItemsItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_text_items_items';
  info: {
    displayName: 'TextItemsItem';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsCards extends Struct.ComponentSchema {
  collectionName: 'components_sections_cards';
  info: {
    displayName: 'Cards';
  };
  attributes: {
    headers: Schema.Attribute.Component<'elements.section-headers', false> &
      Schema.Attribute.Required;
    items: Schema.Attribute.Component<'utilities.text', true>;
  };
}

export interface SectionsCtaBanner extends Struct.ComponentSchema {
  collectionName: 'components_sections_cta_banners';
  info: {
    displayName: 'CTABanner';
  };
  attributes: {
    button: Schema.Attribute.Component<'utilities.basic-link', false> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Component<'utilities.basic-image', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    headers: Schema.Attribute.Component<'elements.section-headers', false> &
      Schema.Attribute.Required;
    images: Schema.Attribute.Component<'utilities.basic-image', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      >;
    isImageBackground: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    items: Schema.Attribute.Component<'elements.hero-item', true>;
    primaryButton: Schema.Attribute.Component<'utilities.basic-link', false>;
    secondaryButton: Schema.Attribute.Component<'utilities.basic-link', false>;
  };
}

export interface SectionsOurProjects extends Struct.ComponentSchema {
  collectionName: 'components_sections_our_projects';
  info: {
    displayName: 'OurProjects';
  };
  attributes: {
    button: Schema.Attribute.Component<'utilities.basic-link', false>;
    cards: Schema.Attribute.Component<'elements.our-projects-card', true> &
      Schema.Attribute.Required;
    headers: Schema.Attribute.Component<'elements.section-headers', false> &
      Schema.Attribute.Required;
  };
}

export interface SectionsPricing extends Struct.ComponentSchema {
  collectionName: 'components_sections_pricings';
  info: {
    displayName: 'Pricing';
  };
  attributes: {
    button: Schema.Attribute.Component<'utilities.basic-link', false>;
    headers: Schema.Attribute.Component<'elements.section-headers', false> &
      Schema.Attribute.Required;
    items: Schema.Attribute.Component<'elements.pricing-item', true>;
    priceColumnTitle: Schema.Attribute.String & Schema.Attribute.Required;
    termColumnTitle: Schema.Attribute.String & Schema.Attribute.Required;
    typeColumnTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsStages extends Struct.ComponentSchema {
  collectionName: 'components_sections_stages';
  info: {
    displayName: 'Stages';
  };
  attributes: {
    headers: Schema.Attribute.Component<'elements.section-headers', false> &
      Schema.Attribute.Required;
    image: Schema.Attribute.Component<'utilities.basic-image', false> &
      Schema.Attribute.Required;
    items: Schema.Attribute.Component<'elements.stages-item', true> &
      Schema.Attribute.Required;
  };
}

export interface SectionsTextCards extends Struct.ComponentSchema {
  collectionName: 'components_sections_text_cards';
  info: {
    displayName: 'TextCards';
  };
  attributes: {
    cards: Schema.Attribute.Component<'elements.text-cards-card', true>;
    headers: Schema.Attribute.Component<'elements.section-headers', false> &
      Schema.Attribute.Required;
  };
}

export interface SectionsTextItems extends Struct.ComponentSchema {
  collectionName: 'components_sections_text_items';
  info: {
    displayName: 'TextItems';
  };
  attributes: {
    cards: Schema.Attribute.Component<'elements.text-items-card', true>;
    headers: Schema.Attribute.Component<'elements.section-headers', false> &
      Schema.Attribute.Required;
    isBackgroundGrid: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    isHeadCentered: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    items: Schema.Attribute.Component<'elements.text-items-item', true>;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface UtilitiesBasicImage extends Struct.ComponentSchema {
  collectionName: 'components_utilities_basic_images';
  info: {
    displayName: 'BasicImage';
  };
  attributes: {
    alt: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface UtilitiesBasicLink extends Struct.ComponentSchema {
  collectionName: 'components_utilities_basic_links';
  info: {
    displayName: 'BasicLink';
  };
  attributes: {
    href: Schema.Attribute.Text & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    newTab: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface UtilitiesFormField extends Struct.ComponentSchema {
  collectionName: 'components_utilities_form_fields';
  info: {
    displayName: 'FormField';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    placeholder: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UtilitiesImageLink extends Struct.ComponentSchema {
  collectionName: 'components_utilities_image_links';
  info: {
    displayName: 'ImageLink';
  };
  attributes: {
    image: Schema.Attribute.Component<'utilities.basic-image', false> &
      Schema.Attribute.Required;
    link: Schema.Attribute.Component<'utilities.basic-link', false>;
  };
}

export interface UtilitiesText extends Struct.ComponentSchema {
  collectionName: 'components_utilities_texts';
  info: {
    displayName: 'Text';
  };
  attributes: {
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.contact-item': ElementsContactItem;
      'elements.hero-item': ElementsHeroItem;
      'elements.our-projects-card': ElementsOurProjectsCard;
      'elements.pricing-item': ElementsPricingItem;
      'elements.section-headers': ElementsSectionHeaders;
      'elements.stages-item': ElementsStagesItem;
      'elements.text-cards-card': ElementsTextCardsCard;
      'elements.text-items-card': ElementsTextItemsCard;
      'elements.text-items-item': ElementsTextItemsItem;
      'sections.cards': SectionsCards;
      'sections.cta-banner': SectionsCtaBanner;
      'sections.hero': SectionsHero;
      'sections.our-projects': SectionsOurProjects;
      'sections.pricing': SectionsPricing;
      'sections.stages': SectionsStages;
      'sections.text-cards': SectionsTextCards;
      'sections.text-items': SectionsTextItems;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
      'utilities.basic-image': UtilitiesBasicImage;
      'utilities.basic-link': UtilitiesBasicLink;
      'utilities.form-field': UtilitiesFormField;
      'utilities.image-link': UtilitiesImageLink;
      'utilities.text': UtilitiesText;
    }
  }
}
