import * as React from 'react';
import { View, StyleSheet, Linking } from 'react-native';
import { Vertical } from '../ui/Spacer';
import BulletPoints from '../ui/BulletPoints';
import { InfoIcon } from '../Icons';
import * as ui from './styles';
import Text, { Heading } from '../ui/Text';

interface HelplineOptionsProps {
  title: string;
  bulletPoints: string[];
}

const HelplineOptions = ({
  title,
  bulletPoints = [],
}: HelplineOptionsProps) => {
  return (
    <ui.Wrapper>
      <ui.Row>
        <InfoIcon />
        <ui.Title level={4}>{title}</ui.Title>
      </ui.Row>
      <ui.Bullets>
        <BulletPoints
          items={bulletPoints.map(x => {
            if (x.indexOf('tel:') !== -1) {
              const [text, phone] = x.split('tel:');
              return (
                <ui.BulletText>
                  {text}
                  <ui.Phone
                    bold
                    onPress={() =>
                      Linking.openURL(`tel:+354${phone.replace(/\s/g, '')}`)
                    }
                  >
                    {phone}
                  </ui.Phone>
                </ui.BulletText>
              );
            }
            return <ui.BulletText>{x}</ui.BulletText>;
          })}
        />
      </ui.Bullets>
    </ui.Wrapper>
  );
};

export default HelplineOptions;
