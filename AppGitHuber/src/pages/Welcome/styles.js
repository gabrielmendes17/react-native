import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secundary,
    padding: metrics.basePadding * 2,
    alignItems: "stretch",
    justifyContent: "center",
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.light
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 44,
    paddingHorizontal: metrics.basePadding
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    color: colors.light,
    marginTop: metrics.baseMargin,
    lineHeight: 21,
  },
  form: {
    marginTop:  metrics.baseMargin * 2
  },
  button: {
    backgroundColor: colors.primary,
    marginTop: metrics.baseMargin,
    borderRadius: metrics.baseRadius,
    height: 44,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 14,
  }
})

export default styles;
